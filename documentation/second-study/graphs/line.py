import matplotlib.pyplot as plt

measured_parameter = [12, 1, 7, 8, 11, 7, 7, 8] # requires 8 items
number_of_players = [2,4,6,8,10,12,14,16]

plt.plot(number_of_players, measured_parameter, marker="o")
plt.title('parameter x Number of players')
plt.xlabel('Number of players')
plt.ylabel('parameter')
plt.show()