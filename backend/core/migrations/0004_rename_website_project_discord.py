# Generated by Django 5.0.6 on 2024-06-23 17:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_remove_project_link_project_github_repo_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='website',
            new_name='discord',
        ),
    ]
