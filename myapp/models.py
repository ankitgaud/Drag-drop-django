from django.db import models

# Create your models here.
#class Html_tags(models.Model):
class Document(models.Model):
	description = models.CharField(max_length=255, blank=True)
	document = models.FileField(upload_to='documents/')
	
class Create_page(models.Model):
	Name_of_page = models.CharField(max_length=255, blank=True)
	document = models.CharField(max_length=2500)	