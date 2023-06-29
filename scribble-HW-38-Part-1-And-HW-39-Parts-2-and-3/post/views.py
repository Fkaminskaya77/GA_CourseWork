from django.shortcuts import render, redirect
from .models import Post, Comment
from .forms import PostForm, CommentForm

# list view for post

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post/post_list.html', {'posts': posts})


def post_detail(request, pk):
    post = Post.objects.get(id=pk)
    return render(request, 'post/post_detail.html', {'post': post})

def post_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST) # request.body from express
        if form.is_valid():
            post = form.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'post/post_form.html', {'form': form})

def post_edit(request, pk):
    post = Post.objects.get(id=pk)
    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'post/post_form.html', {'form': form})

def post_delete(request, pk):
    Post.objects.get(id=pk).delete()
    return redirect('post_list')

# Comment Views
def comment_list(request):
    comments = Comment.objects.all()
    return render(request, 'post/comment_list.html', {'comments': comments})

def comment_detail(request, pk):
    comment = Comment.objects.get(id=pk)
    return render(request, 'post/comment_detail.html', {'comment': comment})


def comment_create(request):
    if request.method=='POST':
        form = CommentForm(request.POST)
        if form.is_valid:
            comment = form.save()
            return redirect('post_list')
    else:
        form = CommentForm()
    return render(request, 'post/comment_form.html', {'form':form})

def comment_update(request,pk):
    comment = Comment.objects.get(id=pk)
    if request.method == 'POST':
        form = CommentForm(request.POST, instance=comment)
        if form.is_valid:
            comment = form.save()
            return redirect('post_list')
    else:
        form = CommentForm(instance = comment)
    return render(request, 'post/comment_form.html', {'form':form})

def comment_delete(request,pk):
    Comment.objects.get(id=pk).delete()
    return redirect('post_list')