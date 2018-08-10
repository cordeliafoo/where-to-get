import graphene
from graphene_django.types import DjangoObjectType

from . import models

class DishType(DjangoObjectType):
    class Meta:
        model = models.Dish
        interfaces = (graphene.Node, )


class Query(graphene.AbstractType):
    all_dishes = graphene.List(DishType)
    dish = graphene.Field(DishType, id=graphene.ID())

    def resolve_all_dishes(self, context, **kwargs):
        return models.Dish.objects.all()


    def resolve_dish(self, context, **kwargs):
        id = kwargs.get('id')
        return models.Dish.objects.get(pk=id)
