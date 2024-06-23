from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Project, Message, Skill
from cloudinary.utils import cloudinary_url


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name']

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'github_repo', 'website', 'image']

    def get_image(self, obj):
        return cloudinary_url(obj.image.public_id, secure=True)[0]

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    profile_picture = serializers.SerializerMethodField()
    cv = serializers.SerializerMethodField()
    projects = ProjectSerializer(many=True, read_only=True)
    class Meta:
        model = UserProfile
        fields = ['user', 'projects', 'bio', 'profile_picture', 'linkedin', 'discord', 'github', 'twitter', 'cv']

    def get_profile_picture(self, obj):
        return cloudinary_url(obj.profile_picture.public_id, secure=True)[0]

    def get_cv(self, obj):
        if obj.cv:
            url, options = cloudinary_url(obj.cv.public_id, resource_type="image", flags="attachment", secure=True)
            return url
        return None

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'name', 'email', 'message', 'timestamp']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'user', 'name', 'level']
