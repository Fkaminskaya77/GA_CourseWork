from django.db import models

# Create your models here.
class Author(models.Model):
   name = models.CharField(max_length=150)
   bio = models.TextField(max_length=300)
   date_of_birth = models.DateField()
   country_of_origin = models.CharField(max_length=100)


   def __str__(self):
       return self.name


class Genre(models.Model):
   name = models.CharField(max_length=40)
   description = models.TextField(max_length=250)
  
   def __str__(self):
       return self.name
  
  
class Book(models.Model):
   title = models.CharField(max_length=100)
   isbn = models.IntegerField(unique=True)
   publisher = models.CharField(max_length=100)
   publication_date = models.DateField()
   description = models.TextField(blank=True, max_length=500)
   author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name = 'book')
   genre =models.ManyToManyField(Genre)
  
   def __str__(self):
       return self.title