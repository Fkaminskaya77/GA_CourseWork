from rest_framework.routers import DefaultRouter
from django.urls import path
from . import views

urlpatterns = [
    path('author/', views.AuthorList.as_view(), name='author_list'),
    path('author/<int:pk>', views.AuthorDetail.as_view(), name='author_detail'),
    path('genre/', views.GenreList.as_view(), name='genre_list'),
    path('genre/<int:pk>', views.GenreDetail.as_view(), name='genre_detail'),
    path('book/', views.BookList.as_view(), name='book_list'),
    path('book/<int:pk>', views.BookDetail.as_view(), name='book_detail')
]