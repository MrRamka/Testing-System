from django.db import models
from django.db.models import SET_NULL
from django.utils.text import slugify

from user.models import User


class Test(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField()
    random_order = models.BooleanField()
    author = models.ForeignKey(User, on_delete=SET_NULL, null=True)

    def _generate_unique_slug(self):
        unique_slug = slugify(self.name)
        num = 1
        while Test.objects.filter(slug=unique_slug).exists():
            unique_slug = '{}-{}'.format(unique_slug, num)
            num += 1
        return unique_slug

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = self._generate_unique_slug()
        super().save(*args, **kwargs)

    def __str__(self) -> str:
        return f'{self.name} [{self.author}]'


SINGLE, MULTIPLE, TEXT, MATCHING, SEQUENCE = range(5)
TYPES = (
    (SINGLE, "Single"),
    (MULTIPLE, "Multiple"),
    (TEXT, "Text"),
    (MATCHING, "Matching"),
    (SEQUENCE, "Sequence"),
)


class QuestionType(models.Model):
    type = models.IntegerField(choices=TYPES, default=SINGLE)


class Question(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True, null=True)
    image = models.ImageField(null=True, blank=True)
    explanation = models.CharField(max_length=500, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    test = models.ForeignKey(Test, on_delete=SET_NULL, null=True)
    type = models.IntegerField(choices=TYPES, default=SINGLE)

    def __str__(self) -> str:
        return f'[{TYPES[self.type][1]}] {self.name}'


class Answer(models.Model):
    value = models.CharField(max_length=250)
    is_correct = models.BooleanField()
    question = models.ForeignKey(Question, on_delete=SET_NULL, null=True)
    type = models.IntegerField(choices=TYPES, default=SINGLE)

    def __str__(self) -> str:
        return f'[{TYPES[self.type][1]}] [{self.is_correct}] {self.value}'


class UserAnswer(models.Model):
    duration = models.TimeField()
    user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
    answer = models.ForeignKey(Answer, on_delete=SET_NULL, null=True)

    def __str__(self) -> str:
        return f'[{self.user.__str__()}] - [{self.answer.__str__()}]'
