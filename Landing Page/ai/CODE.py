# Import the pyplot module from the matplotlib library for plotting.
import matplotlib.pyplot as plt

# Import the Basemap class from the mpl_toolkits.basemap module for creating map projections.
from mpl_toolkits.basemap import Basemap

# Create a new figure for plotting.
fig = plt.figure()

# Create a new basemap instance
m = Basemap(projection='merc', llcrnrlon=-180, llcrnrlat=-80, urcrnrlon=180, urcrnrlat=80, resolution='c')
# Initialize a Basemap instance with Mercator projection.
# llcrnrlon and llcrnrlat specify the lower-left corner of the map (longitude and latitude).
# urcrnrlon and urcrnrlat specify the upper-right corner of the map (longitude and latitude).
# resolution='c' sets the resolution of the map to 'crude'.

# Draw coastlines on the map.
m.drawcoastlines()

# Draw country boundaries on the map.
m.drawcountries()

# Draw state boundaries on the map.
m.drawstates()

# Add a satellite image of the earth with forest cover using the bluemarble() method
# Overlay a satellite image of the Earth with forest cover on the map.
m.bluemarble()

# Set the title of the plot.
plt.title('Satellite Image of the Earth with Forest Cover')

# Display the plot.
plt.show()