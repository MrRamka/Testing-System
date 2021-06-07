from django.contrib import admin

from core.models import Test, QuestionType, Question


@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ['name', 'description', 'created_at', 'updated_at', 'random_order', 'author']
    list_display_links = ['name']
    readonly_fields = ['slug']


@admin.register(QuestionType)
class QuestionTypeAdmin(admin.ModelAdmin):
    list_display = ['type']
    list_display_links = ['type']


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['name', 'created_at', 'updated_at', 'test', 'type']
    list_display_links = ['name']
