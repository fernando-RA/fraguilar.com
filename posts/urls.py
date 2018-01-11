"""fraguilar URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from django.contrib import admin
from posts import views

from .views import (
    post_list,
    post_create,
    post_detail,
    post_update,
    post_delete,
)

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'^$', post_list),
    path('create/', views.post_list, name="post_create"),
    path('detail/', views.post_list, name="post_create"),
    path('update/', views.post_list, name="post_create"),
    path('delete/', "posts.views.post_delete"),#views.post_list, name="post_create"),

]
