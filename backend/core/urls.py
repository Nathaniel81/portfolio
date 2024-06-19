from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet, ProjectViewSet, MessageViewSet, SkillViewSet

router = DefaultRouter()
router.register(r'userprofiles', UserProfileViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'messages', MessageViewSet)
router.register(r'skills', SkillViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
