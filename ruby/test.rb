# hash example

# h = {'dog' => 'canine', 'cat' => 'feline', 'donkey' => 'asinine', 12 => 'dodecine'}  
# puts h.length  # 4  
# puts h['dog']  # 'canine'  
# puts h  
# puts h[12]  

# people = Hash.new  
# people[:nickname] = 'IndianGuru'  
# people[:language] = 'Marathi'  
# people[:lastname] = 'Talim'  
  
#puts people[:lastname] # Talim  
h = Hash.new
h = {'nickname': 'IndianGuru', 'language': 'Marathi', 'lastname': 'Talim'}  
puts h  

# months = Hash.new "month"
# puts "#{months[0]}"
# puts "#{months[72]}"
# puts months


# H = Hash["a" => 100, "b" => 200]

# puts H['a']
# puts H['b']

# 
# class customer
# 	@@no_of_customer = 0
# 	def initialize(id, name, addr)
# 		@custid = id
# 		@name = name
# 		@addr = addr
# 	end
# end
# cust1 = Customer.new("1", "John", "Wisdom Apartments, Ludhiya")
# puts cust1

# class Sample
#    def hello
#       puts "Hello Ruby!"
#    end
# end
# object = Sample.new
# object.hello

# class Customer
#    @@no_of_customers=0
#    def initialize(id, name, addr)
#       @cust_id=id
#       @cust_name=name
#       @cust_addr=addr
#    end
#    def display_details()
#       puts "Customer id #@cust_id"
#       puts "Customer name #@cust_name"
#       puts "Customer address #@cust_addr"
#     end
#     def total_no_of_customers()
#        @@no_of_customers += 1
#        puts "Total number of customers: #@@no_of_customers"
#     end
# end

# puts "Customer id #@cust_id"