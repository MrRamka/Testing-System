from rest_framework.renderers import JSONRenderer


class CustomRenderer(JSONRenderer):

    def render(self, data, accepted_media_type=None, renderer_context=None):
        response_data = {'message': 'ok', 'data': data, 'success': True}

        if isinstance(data, dict) and data.get('success', None) is False:
            message = data.get('message', dict())
            response_data = {'message': message, 'data': [], 'success': False}

            if isinstance(message, dict):
                error_code = message.get('error_code', None)
                if error_code:
                    response_data['error_code'] = error_code

        response = super(CustomRenderer, self).render(
            response_data, accepted_media_type, renderer_context)
        return response
