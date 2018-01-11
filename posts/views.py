from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
# How something is displayed inside the page
def post_home(request):
    return HttpResponse("<h1>Hello World</h1>")
