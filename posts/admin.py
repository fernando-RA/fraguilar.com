from django.contrib import admin

# Register your models here.
from posts.models import Post

class PostModelAdmin(admin.ModelAdmin):
    list_display = ("title", "timestamp", "updated")
    list_display_links = ["title"]
    list_filter = ["updated", "timestamp"]

    search_fields = ["title", "content"]

    class Meta:
        mode = Post

admin.site.register(Post, PostModelAdmin)
