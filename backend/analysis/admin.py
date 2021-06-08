from django.contrib import admin

from analysis.models import QuestionAnalysis


@admin.register(QuestionAnalysis)
class QuestionAnalysisAdmin(admin.ModelAdmin):
    list_display = ['question', 'difficult_index', 'upper_27_difficult_index', 'lower_27_difficult_index',
                    'discrimination_index']
    readonly_fields = ['difficult_index', 'upper_27_difficult_index', 'lower_27_difficult_index',
                       'discrimination_index']
