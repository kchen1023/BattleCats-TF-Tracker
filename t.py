import json

with open('UDP_Release_2.7.2.json') as f:
    data = json.load(f)

for key in sorted(data.keys(), key=int):
    value = data[key]
    name = value.get('Name', 'Not Available')
    print(f"Key: {key}, Name: {name}")