
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Settings, CalendarDays, Heart, Clock, MapPin, Star } from "lucide-react";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  
  // Mock user data
  const userData = {
    name: "Mariana Souza",
    email: "mariana@example.com",
    phone: "+55 11 98765-4321",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    bio: "I love trying new beauty trends and finding the best salons in the city.",
    appointments: [
      {
        id: "1",
        salonName: "Eliza's Hair & Beauty",
        service: "Women's Haircut",
        date: "2023-06-15",
        time: "10:00",
        status: "completed",
        price: 80,
        salonImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
      },
      {
        id: "2",
        salonName: "Nail Paradise",
        service: "Gel Manicure",
        date: "2023-06-28",
        time: "14:30",
        status: "completed",
        price: 60,
        salonImage: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80"
      },
      {
        id: "3",
        salonName: "Glam Studio",
        service: "Evening Makeup",
        date: "2023-07-10",
        time: "18:00",
        status: "upcoming",
        price: 120,
        salonImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
      }
    ],
    favorites: [
      {
        id: "1",
        name: "Eliza's Hair & Beauty",
        category: "Hair Salon",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
        location: "São Paulo, SP"
      },
      {
        id: "3",
        name: "Nail Paradise",
        category: "Nail Salon",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
        location: "Belo Horizonte, MG"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-glam-900 py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-gray-300">Manage your personal information, appointments, and favorites.</p>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid grid-cols-3 md:w-[400px] bg-glam-800 mb-8">
            <TabsTrigger value="profile" className="data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="appointments" className="data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
              <CalendarDays className="mr-2 h-4 w-4" />
              Appointments
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
              <Heart className="mr-2 h-4 w-4" />
              Favorites
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="space-y-8">
            <div className="bg-glam-800 rounded-xl border border-glam-700 p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gold-500 mb-4">
                    <img 
                      src={userData.avatar} 
                      alt={userData.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {editMode ? (
                    <Button variant="outline" className="border-gold-500 text-gold-400 w-full">
                      Change Photo
                    </Button>
                  ) : (
                    <div className="text-center">
                      <h2 className="text-xl font-bold text-white">{userData.name}</h2>
                      <p className="text-gold-400">Client</p>
                    </div>
                  )}
                </div>
                
                <div className="md:w-2/3">
                  {editMode ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-1">Name</label>
                        <Input defaultValue={userData.name} className="bg-glam-900 border-glam-700 text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-1">Email</label>
                        <Input defaultValue={userData.email} className="bg-glam-900 border-glam-700 text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-1">Phone</label>
                        <Input defaultValue={userData.phone} className="bg-glam-900 border-glam-700 text-white" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gold-400 mb-1">Bio</label>
                        <Textarea defaultValue={userData.bio} className="bg-glam-900 border-glam-700 text-white" />
                      </div>
                      <div className="flex gap-3">
                        <Button onClick={() => setEditMode(false)} className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setEditMode(false)} className="border-glam-700 text-white hover:bg-glam-700">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h2 className="text-xl font-bold text-white">Personal Information</h2>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => setEditMode(true)}
                          className="border-gold-500 text-gold-400 hover:bg-glam-700"
                        >
                          <Settings className="mr-2 h-4 w-4" />
                          Edit Profile
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gold-400">Email</p>
                            <p className="text-white">{userData.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gold-400">Phone</p>
                            <p className="text-white">{userData.phone}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gold-400">Bio</p>
                          <p className="text-white">{userData.bio}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="bg-glam-800 rounded-xl border border-glam-700 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-glam-700 w-full md:w-auto">
                    Change Password
                  </Button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Notification Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="email-notifications" 
                        defaultChecked 
                        className="h-4 w-4 rounded border-gray-600 text-gold-500 focus:ring-gold-500 bg-glam-900"
                      />
                      <label htmlFor="email-notifications" className="ml-2 text-gray-300">
                        Email notifications
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="sms-notifications" 
                        defaultChecked 
                        className="h-4 w-4 rounded border-gray-600 text-gold-500 focus:ring-gold-500 bg-glam-900"
                      />
                      <label htmlFor="sms-notifications" className="ml-2 text-gray-300">
                        SMS notifications
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="promo-notifications" 
                        defaultChecked={false}
                        className="h-4 w-4 rounded border-gray-600 text-gold-500 focus:ring-gold-500 bg-glam-900"
                      />
                      <label htmlFor="promo-notifications" className="ml-2 text-gray-300">
                        Promotional updates
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Privacy Settings</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="profile-public" 
                        defaultChecked 
                        className="h-4 w-4 rounded border-gray-600 text-gold-500 focus:ring-gold-500 bg-glam-900"
                      />
                      <label htmlFor="profile-public" className="ml-2 text-gray-300">
                        Make my reviews public
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="share-data" 
                        defaultChecked={false}
                        className="h-4 w-4 rounded border-gray-600 text-gold-500 focus:ring-gold-500 bg-glam-900"
                      />
                      <label htmlFor="share-data" className="ml-2 text-gray-300">
                        Share my data with partners
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="appointments">
            <div className="bg-glam-800 rounded-xl border border-glam-700 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6">My Appointments</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-glam-700">
                    All
                  </Button>
                  <Button variant="ghost" className="text-white hover:text-gold-400 hover:bg-glam-700">
                    Upcoming
                  </Button>
                  <Button variant="ghost" className="text-white hover:text-gold-400 hover:bg-glam-700">
                    Completed
                  </Button>
                  <Button variant="ghost" className="text-white hover:text-gold-400 hover:bg-glam-700">
                    Canceled
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {userData.appointments.map((appointment) => (
                    <div key={appointment.id} className="bg-glam-900 rounded-lg p-4 md:p-6 border border-glam-700">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-1/4">
                          <div className="h-24 w-24 md:h-32 md:w-32 rounded-lg overflow-hidden">
                            <img 
                              src={appointment.salonImage} 
                              alt={appointment.salonName} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:w-2/4">
                          <h3 className="text-lg font-bold text-white">{appointment.salonName}</h3>
                          <p className="text-gold-400">{appointment.service}</p>
                          <div className="flex items-center mt-2 text-gray-300">
                            <CalendarDays className="h-4 w-4 mr-1" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center mt-1 text-gray-300">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="mt-2">
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'completed' 
                                ? 'bg-green-900/30 text-green-400' 
                                : appointment.status === 'upcoming'
                                ? 'bg-blue-900/30 text-blue-400'
                                : 'bg-red-900/30 text-red-400'
                            }`}>
                              {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="md:w-1/4 flex flex-col justify-between">
                          <div className="text-right">
                            <p className="text-sm text-gray-400">Price</p>
                            <p className="text-lg font-bold text-gold-400">R$ {appointment.price}</p>
                          </div>
                          <div className="flex flex-col gap-2 mt-4 md:mt-0">
                            {appointment.status === 'completed' && (
                              <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-glam-700">
                                Leave Review
                              </Button>
                            )}
                            {appointment.status === 'upcoming' && (
                              <>
                                <Button variant="outline" className="border-gold-500 text-gold-400 hover:bg-glam-700">
                                  Reschedule
                                </Button>
                                <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-900/30">
                                  Cancel
                                </Button>
                              </>
                            )}
                            <Button variant="ghost" className="text-white hover:text-gold-400 hover:bg-glam-700">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                    Book New Appointment
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="bg-glam-800 rounded-xl border border-glam-700 p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-6">My Favorite Salons</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userData.favorites.map((salon) => (
                  <div key={salon.id} className="bg-glam-900 rounded-lg overflow-hidden border border-glam-700 hover:border-gold-500 transition-colors">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={salon.image} 
                        alt={salon.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white text-lg mb-1">{salon.name}</h3>
                      <p className="text-gold-400 text-sm mb-2">{salon.category}</p>
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-gray-300 text-sm">{salon.location}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <Star className="h-4 w-4 text-gold-400 mr-1" />
                        <span className="text-white">{salon.rating}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 flex-1">
                          Book Now
                        </Button>
                        <Button variant="outline" className="border-glam-700 text-white hover:bg-glam-700">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {userData.favorites.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-300 mb-4">You haven't added any favorites yet.</p>
                  <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                    Explore Salons
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
