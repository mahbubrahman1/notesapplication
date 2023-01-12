from django.contrib import admin

from .models import Note

# register model in database
admin.site.register(Note)