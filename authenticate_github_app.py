import jwt
import time
import requests

# Fill these in with your own values
APP_ID = 'YOUR_APP_ID'
INSTALLATION_ID = 'YOUR_INSTALLATION_ID'
PRIVATE_KEY_PATH = 'path/to/your-private-key.pem'

# Step 1: Read private key
with open(PRIVATE_KEY_PATH, 'r') as f:
    private_key = f.read()

# Step 2: Create JWT
now = int(time.time())
payload = {
    "iat": now,
    "exp": now + 600,  # JWT expiration time (10 minute maximum)
    "iss": APP_ID
}
jwt_token = jwt.encode(payload, private_key, algorithm="RS256")

# Step 3: Request installation access token
headers = {
    "Authorization": f"Bearer {jwt_token}",
    "Accept": "application/vnd.github+json"
}
url = f"https://api.github.com/app/installations/{INSTALLATION_ID}/access_tokens"
response = requests.post(url, headers=headers)
if response.status_code == 201:
    access_token = response.json()["token"]
    print("Access token:", access_token)
else:
    print("Failed to get access token:", response.status_code, response.text)

# Step 4: Use the access token (example: list repos accessible to the installation)
headers = {
    "Authorization": f"token {access_token}",
    "Accept": "application/vnd.github+json"
}
repos_resp = requests.get("https://api.github.com/installation/repositories", headers=headers)
print(repos_resp.json())
