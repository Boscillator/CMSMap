import bs4
import geocoder
import json

institutes = {}

f = open('CMS_institutions.html','r')
html = f.read()
f.close()
soup = bs4.BeautifulSoup(html)

for name in soup.find_all('h3'):
    name = name.get_text()
    g = geocoder.google(name)
    latlng = {}
    try:
        latlng['lat'] = g.latlng[0]
        latlng['lng'] = g.latlng[1]
        institutes[name] = latlng
    except IndexError:
        print "%s does not google" % name
    
f = open('cms.json','w')
j = json.dumps(institutes)
f.write(j)
f.close()