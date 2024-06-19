from django.contrib import admin
from .models import UserProfile, Project, Message, Skill


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
	list_display = ('id', 'user')

@admin.register(Message)
class ContactAdmin(admin.ModelAdmin):
	list_display = ('id', 'timestamp', 'name',)

@admin.register(Project)
class ContactAdmin(admin.ModelAdmin):
	list_display = ('title', 'is_active',)

@admin.register(Skill)
class ContactAdmin(admin.ModelAdmin):
	list_display = ('name',)
