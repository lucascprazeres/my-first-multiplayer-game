import matplotlib.pyplot as plt

measured_parameter = [
  506.3674,
  457.9235,
  502.4904499999996,
  461.71813749999956,
  483.87840000000017,
  506.6768916666667,
  514.4801000000001,
  521.5449874999997
] # requires 8 items
number_of_players = [2,4,6,8,10,12,15,16]

measured_parameter.sort()

plt.plot(number_of_players, measured_parameter, marker="o")
plt.title('Delay (ms) x Number of simultaneos requests')
plt.xlabel('Number of simultaneos requests')
plt.ylabel('Delay (ms)')
plt.show()