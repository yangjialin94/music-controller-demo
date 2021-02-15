from django.contrib import admin

# Register your models here.
# bring in our models
from . import models

# Register your models here.
admin.site.register(models.Room)