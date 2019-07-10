from django.urls import path
from .views import *

urlpatterns = [
	path('', Home, name='hello'),
	path('savefile/<str:filename>/', save_file, name='hello1'),
	path('request/element/', send_html_element_from_python_function, name="hello"),
	path('request/Element/', request_element, name="html_tags"),
	path('show_pages/', Show_pages, name="show_pages"),
	path('Open_page/', Open_page, name="open_page"),
]