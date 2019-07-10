from django.shortcuts import render
from django.http  import HttpResponse
from django.http import JsonResponse
from .models import Document, Create_page
import json
from datetime import date
import datetime
# Create your views here.

def send_html_element_from_python_function(request):
	if request.method == 'GET':
		Value = request.GET['value']
		Value1 = "<div class='form-group' id='username1' draggable='true' ondragstart='dragStart(event)'>  <label for='usr'><b>Name:</b></label>  <input type='text' class='form-control' id='usr1'></div>"
		return HttpResponse(Value1)

def request_element(request):
	if request.method == 'GET':
		pk1 = request.GET['value']
		file = Document.objects.get(pk=pk1)
		return HttpResponse(file.document)


def Home(request):
	return render(request, "home.html")	

def save_file(request, filename):
	file_name = filename
	if request.method == 'GET':

		htmlfile = request.GET['html_page']
		file = Create_page.objects.create(Name_of_page=file_name, document = htmlfile)
		file.save()
		return HttpResponse("File saved")

def Show_pages(request):
	all_pages = Create_page.objects.all()
	context = {'all_pages': all_pages}
	return render(request, 'show_pages.html', context)	

def Open_page(request):
	if request.method == 'GET':
		pk1 = request.GET['page_id']
		html_page = Create_page.objects.get(pk = pk1)
		html_page1 = html_page.document
		return HttpResponse(html_page1)
