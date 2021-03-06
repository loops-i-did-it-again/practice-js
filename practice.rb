# Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
def print_numbers_divisible_by_three
  index = 1
  while index <= 1000
    if index % 3 == 0
      puts index
    end
    index += 1
  end
end
# print_numbers_divisible_by_three


# Write a method that accepts an array of strings and prints out every other string.
def print_every_other_item(strings)
  index = 0
  strings.each do |string|
    if index % 2 == 0
      puts string
    end
    index += 1
  end
end
# print_every_other_item(["a", "b", "c", "d", "e"])


# Write a method that accepts an array of numbers and returns the sum.
def compute_sum(numbers)
  sum = 0
  numbers.each do |number|
    sum += number
  end
  return sum
end
# puts compute_sum([2, 4, 5])


# Start with the hash: city_populations = {chi: 2700000}
# Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
city_populations = {chi: 2700000}
city_populations[:nyc] = 8400000
city_populations[:sf] = 800000
# p city_populations



# Write a method that prints out every number from 1 to 100. 

def one_to_a_hundred
  number = 0
  while number < 100
    number += 1
    puts number
  end
end
# one_to_a_hundred

# Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
def every_other_number
  number = 0
  while number < 100
    if number % 2 != 0
      puts number
    end
    number += 1
  end
end
# every_other_number


# Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
def number_of_55s(numbers)
  count = 0
  numbers.each do |number|
    if number == 55
      count += 1
    end
  end
  puts count
end
# number_of_55s([1, 55, 2, 55, 1003, 55, 4])


# Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
def awesomesauced(strings)
  index = 0
  length_of_array = strings.length
  awesomesauced_array = []

  while index < length_of_array
    awesomesauced_array << strings[index]
    if index != length_of_array - 1
      awesomesauced_array << "awesomesauce"
    end
    index += 1
  end
  p awesomesauced_array
end
# awesomesauced(["a", "b", "c", "d", "e"])


# Start with the hash: item_amounts = {chair: 5, table: 2}
# Someone just bought two chairs. Change the hash such that the chair amount is 3.
# The final result should be: {chair: 3, table: 2}
item_amounts = {chair: 5, table: 2}
item_amounts[:chair] -= 2
# p item_amounts


# Start with the hash: item_amounts = {chair: 5, table: 2}
# You received 7 desks to sell. Change the hash to include desks.
# The final result should be: {chair: 5, table: 2, desk: 7}
item_amounts = {chair: 5, :table => 2}
item_amounts[:desk] = 7
# p item_amounts

# Write a method that accepts a number and returns its factorial.
# For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
def factorial(number)
  product = 1
  while number > 1
    product *= number
    number -= 1
  end
  p product
end
# factorial(6)


# Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

def print_sums(nums1, nums2)
  nums1.each do |num1|
    nums2.each do |num2|
      p num1 + num2
    end
  end
end
# print_sums([1, 5, 10], [100, 500, 1000])

# Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
def select_even_items(strings)
  result = []
  index = 0
  strings.each do |string|
    if index % 2 == 0
      result << string
    end
    index = index + 1
  end
  result
end
# p select_even_items(["a", "b", "c", "d", "e", "f"])

# Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
def max(numbers)
  current_max = numbers[0]
  numbers.each do |number|
    if number > current_max
      current_max = number
    end
  end
  current_max
end
# p max([5, 4, 8, 1, 2])

# Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
def factorial(number)
  result = 1
  current_number = number
  number.times do
    result = result * current_number
    current_number = current_number - 1
  end
  result
end
# p factorial(5)

# Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.
def descending(numbers)
  result = []
  index = numbers.length - 1
  numbers.length.times do
    result << numbers[index]
    index = index - 1
  end
  result
end
# p descending([1, 3, 5, 7])

# Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
def sum_combinations(numbers1, numbers2)
  result = []
  numbers1.each do |number1|
    numbers2.each do |number2|
      result << number1 + number2
    end
  end
  result
end
# p sum_combinations([1, 5, 10], [100, 500, 1000])

# 1. Write a function that takes in an array of numbers and returns its sum.
def sum(numbers)
  result = 0
  numbers.each do |num|
    result += num
  end
  result
end

# p sum([1, 2, 3])


# 2. Write a function that takes in an array of strings and returns the smallest string.
def smallest_string(strings)
  smallest = strings[0]
  strings.each do |string|
    if string.length < smallest.length
      smallest = string
    end
  end
  smallest
end
# p smallest_string(["apple", "banana", "orange", "kiwi"])


# 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
# 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
def a_words(words)
  count = 0
  index = 0
  while index < words.length
    if words[index][0] == "a"
      count += 1
    end
    index += 1
  end
  count
end
# p a_words(["apple", "banana", "apricot", "kiwi"])


# 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
def frankenstring(strings)
  result = ""
  strings.each do |string|
    result += "#{string},"
  end
  result.chop
end
# p frankenstring(["apple", "banana", "apricot", "kiwi"])

# 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
def product(numbers)
  result = 1
  numbers.each do |number|
    result *= number
  end
  result
end
# p product([1, 2, 4, 5])


# 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
def two_smallest(numbers)
  smallest_index = 0
  smallest = numbers[smallest_index]
  i = 0
  while i < numbers.length
    if numbers[i] < smallest
      smallest = numbers[i]
      smallest_index = i
    end
    i += 1
  end 
  numbers.delete_at(smallest_index)
  i = 0
  second_smallest = numbers[i]
  while i < numbers.length 
    if numbers[i] < second_smallest
      second_smallest = numbers[i]
    end
    i += 1
  end
  [smallest, second_smallest]
end

# p two_smallest([3, 23, 12, 10, 5, 9, 6])


# 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
def zero_count(numbers)
  result = 0
  index = 0
  while index < numbers.length
    if numbers[index] == 0
      result += 1
    end
    index += 1
  end
  result
end

# p zero_count([9, 32, 0, 2, 0, 12, 5, 2, 0, 1])


# 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
def is_all_big(numbers)
  result = true
  index = 0
  while index < numbers.length
    if numbers[index] <= 10
      result = false
    end
    index += 1
  end
  result
end

# p is_all_big([11, 23, 32])


# 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
def a_count(words)
  result = 0
  index = 0
  while index < words.length
    word = words[index]
    index2 = 0
    while index2 < word.length
      if word[index2] == "a"
        result += 1
      end
      index2 += 1
    end
    index += 1
  end
  result
end

# p a_count(["apple", "orange", "grapes"])


# 1. Write a function that reverses a string. Don't use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

def reverse_a_string(string)
  reversed_string = ""
  index = string.length - 1

  while index >= 0
    reversed_string += string[index]
    index -= 1
  end

  reversed_string
end

puts reverse_a_string("motorboat") == "taobrotom"

# 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.

def count_as(string)
  string_array = string.split("")
  count = 0

  string_array.each do |letter|
    if letter == "a"
      count += 1
    end
  end

  count
end

puts count_as("banana") == 3

# 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there's a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!

def find_index(array, target)
  index = 0
  found_index = nil

  array.each do |element|
    if element == target
      found_index = index
    end
    index += 1
  end

  found_index
end

puts find_index([2, 5, 7, 14, 16], 7) == 2
puts find_index([2, 5, 7, 14, 16], 12) == nil

# 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!

def add_to_ordered_array(ordered_array, number)

  # finding the correct index to place the number
  placement_index = 0
  while ordered_array[placement_index] < number
    placement_index += 1
  end

  # moving the other elements out of the way
  index = ordered_array.length - 1
  while index >= placement_index
    ordered_array[index + 1] = ordered_array[index]
    index -= 1
  end

  # placing the number at the correct index
  ordered_array[placement_index] = number

  ordered_array
end

p add_to_ordered_array([1,2,4,12,42], 8)

# 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

def higher_or_lower(ordered_array, number)
  halfway_index = (ordered_array.length / 2).floor
  index = 0
  message = nil

  while index < ordered_array.length
    element = ordered_array[index]

    if element == number
      if index <= halfway_index
        message = "lower"
      else
        message = "higher"
      end
    end

    index += 1
  end

  return message
end

puts higher_or_lower([2, 7, 14, 16, 24], 7) == "lower"
puts higher_or_lower([2, 5, 7, 14, 16, 24], 7) == "lower"
puts higher_or_lower([2, 7, 14, 16, 24], 16) == "higher"
puts higher_or_lower([2, 5, 7, 14, 16, 24], 16) == "higher"
puts higher_or_lower([2, 5, 7, 14, 16, 24], 12) == nil