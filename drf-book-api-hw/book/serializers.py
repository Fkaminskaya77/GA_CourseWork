from rest_framework import serializers
from .models import Author, Genre, Book

class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    books = serializers.HyperlinkedRelatedField(
        view_name='book_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = Author
        fields = ('id', 'name', 'bio', 'date_of_birth', 'country_of_origin', 'books')
  
    
class GenreSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Genre
        fields = ('id', 'name', 'description')
        
class BookSerializer(serializers.HyperlinkedModelSerializer):

    author = serializers.HyperlinkedRelatedField(
        view_name='author_detail',
        queryset=Author.objects.all(),
    )

    genre = serializers.HyperlinkedRelatedField(
        view_name='genre_detail',
        many=True,
        queryset=Genre.objects.all(),
    )

    class Meta:
        model = Book
        fields = ('id', 'title', 'isbn', 'publisher', 'publication_date',
                  'description',  'author', 'genre')