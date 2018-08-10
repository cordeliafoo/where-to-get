import graphene
import dishes.schema

class Queries(
    graphene.ObjectType,
    dishes.schema.Query
):
    dummy = graphene.String()


schema = graphene.Schema(query=Queries)
