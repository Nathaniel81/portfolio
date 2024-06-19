from rest_framework import viewsets, status
from django.core.mail import send_mail
from django.conf import settings
from rest_framework.response import Response
from .models import Message, Project, Skill, UserProfile
from .serializers import (
    MessageSerializer, 
    ProjectSerializer,
    SkillSerializer,
    UserProfileSerializer
)


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.select_related('projects', 'skills').all()
    serializer_class = UserProfileSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        name = serializer.validated_data['name']
        email = serializer.validated_data['email']
        message_content = serializer.validated_data['message']
        
        send_mail(
            subject=f"New contact form submission from {name}",
            message=message_content,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
