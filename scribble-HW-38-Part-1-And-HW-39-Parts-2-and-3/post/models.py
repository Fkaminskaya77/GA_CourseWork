from django.db import models

# Create your models here.

class Post(models.Model):
    author = models.CharField(max_length=120)
    title = models.CharField(max_length=120, default='Title')
    body = models.TextField()
    
def __str__(self):
        return self.title

class Comment(models.Model):
    author = models.CharField(max_length=120, default='Author')
    body = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post')

def __str__(self):
        return self.body