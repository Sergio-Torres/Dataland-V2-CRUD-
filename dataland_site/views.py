from django.shortcuts import render
from .models import Post
from django.http import JsonResponse
from .forms import PostForm
from profiles.models import Profile

# Create your views here.

def post_list_and_create(request):
    form = PostForm(request.POST or None)
    #qs = Post.objects.all()

    if request.is_ajax():
        if form.is_valid():
            author = Profile.objects.get(user = request.user)
            instance = form.save(commit=False)
            instance.author = author
            instance.save()
            return JsonResponse({
                'title': instance.title,
                'description' : instance.description,
                'author': instance.author.user.username,
                'id': instance.id,
            })
    
    context = {
        'form' : form,
    }
    return render(request, 'posts/main.html', context)

def post_detail(request, pk):
    obj = Post.objects.get(pk = pk)
    form = PostForm()

    context = {
            'obj' : obj,
            'form': form,
    }

    return render(request, 'posts/detail.html', context)

def load_post_data_view(request, num_posts):
    if request.is_ajax():

        visible = 3
        upper = num_posts 
        lower = upper - visible #subtract the number of posts by the number you want see
        size = Post.objects.all().count()

        qs = Post.objects.all()
        data = []
        for obj in qs:
            item = {
                'id': obj.id,
                'title': obj.title,
                'description': obj.description,
                'liked': True if request.user in obj.liked.all() else False,
                'count' : obj.like_count,
                'author': obj.author.user.username
            }
            data.append(item)
        return JsonResponse({'data': data[lower:upper], 'size':size})

def post_detail_data_view(request, pk):
    obj = Post.objects.get(pk=pk)
    data = {
        'id': obj.id,
        'title': obj.title,
        'description': obj.description,
        'author' : obj.author.user.username,
        'logged_in': request.user.username,
    }
    return JsonResponse({'data': data})

def like_unlike_post(request):
    if request.is_ajax():
        pk = request.POST.get('pk')
        obj = Post.objects.get(pk=pk)
        if request.user in obj.liked.all():
            liked = False
            obj.liked.remove(request.user)
        else:
            liked = True
            obj.liked.add(request.user)
        return JsonResponse({'liked': liked, 'count': obj.like_count})

def update_post(request, pk):
    obj = Post.objects.get(pk=pk)
    if request.is_ajax():
        new_title = request.POST.get('title')
        new_description = request.POST.get('description')
        obj.title = new_title
        obj.description = new_description
        obj.save()
    
        return JsonResponse({
            'title': new_title,
            'description' : new_description,
            })

def delete_post(request,pk):
    obj = Post.objects.get(pk=pk)
    if request.is_ajax():
        obj.delete()
        return JsonResponse({})
