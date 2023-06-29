from django.urls import path
from . import views
 
 
 
urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('posts', views.post_list, name='post_list'),
    path('post/<int:pk>', views.post_detail, name='post_detail'),
    path('post/new', views.post_create, name='post_create'),
    path('post/<int:pk>/edit', views.post_edit, name='post_edit'),
    path('post/<int:pk>/delete', views.post_delete, name='post_delete'),
    path('comments', views.comment_list, name='comment_list'),
    path('comment/<int:pk>', views.comment_detail, name='comment_detail'),
    path('comment/new',views.comment_create, name='comment_create'),
    path('comment/<int:pk>/update',views.comment_update, name='comment_update'),
    path('comment/<int:pk>/delete',views.comment_delete, name='comment_delete'),

]
