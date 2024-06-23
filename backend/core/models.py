from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    profile_picture =  CloudinaryField('image', null=True, blank=True)
    cv = CloudinaryField('file', null=True, blank=True)
    discord = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    twitter = models.URLField(blank=True)

    class Meta:
        verbose_name_plural = 'User Profiles'
        verbose_name = 'User Profile'

    def __str__(self):
        return self.user.username

class Project(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='projects')
    title = models.CharField(max_length=100)
    description = models.TextField()
    website = models.URLField(blank=True)
    github_repo = models.URLField(blank=True)
    image = CloudinaryField('image', null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["timestamp"]

    def __str__(self):
        return f'Message from {self.name}'

class Skill(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=20, blank=True, null=True)
    description = models.TextField(max_length=255)
    
    class Meta:
        verbose_name_plural = 'Skills'
        verbose_name = 'Skill'

    def __str__(self):
        return self.name

class Testimonial(models.Model):
    name = models.CharField(max_length=200, blank=True, null=True)
    role = models.CharField(max_length=200, blank=True, null=True)
    quote = models.CharField(max_length=500, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name_plural = 'Testimonials'
        verbose_name = 'Testimonial'
        ordering = ["name"]

    def __str__(self):
        return self.name
