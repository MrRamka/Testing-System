import jwt
from app.settings import JWT_SECRET_KEY, JWT_ALGORITHM


def jwt_encode_handler(payload):
    token = jwt.encode(
        payload,
        JWT_SECRET_KEY,
        JWT_ALGORITHM,
    )
    return token


def jwt_decode_handler(token: str):
    payload = jwt.decode(
        token,
        JWT_SECRET_KEY,
        JWT_ALGORITHM,
    )
    return payload
