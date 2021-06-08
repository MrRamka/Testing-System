from django.db import models
from django.db.models import SET_NULL

from analysis.utils import calc_question_difficulty
from core.models import Question, UserAnswer


class QuestionAnalysis(models.Model):
    question = models.ForeignKey(Question, on_delete=SET_NULL, null=True)
    difficult_index = models.FloatField(default=0)
    upper_27_difficult_index = models.FloatField(default=0)
    lower_27_difficult_index = models.FloatField(default=0)
    discrimination_index = models.FloatField(default=0)

    def save(self, *args, **kwargs):
        if self.question:
            user_answers = UserAnswer.objects.filter(answer__question=self.question)
            self.difficult_index = calc_question_difficulty(user_answers)
        super().save(*args, **kwargs)