import matplotlib.pyplot as plt

measured_parameter = [325.4999999999069,345.16000000014895,404.85000000018624,411.6699999999255,438.1] # requires 8 items
number_of_players = [2,3,4,5,6]

plt.plot(number_of_players, measured_parameter, marker="o")
plt.title('Delay (ms) x Number of players')
plt.xlabel('Number of players')
plt.ylabel('Delay (ms)')
plt.show()