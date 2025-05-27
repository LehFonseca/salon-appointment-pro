
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import { Review } from "@/types";
import { Plus, Edit, Trash2, Search, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ReviewManagement = () => {
  const { reviews, addReview, updateReview, deleteReview, businesses, users, appointments } = useApp();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [formData, setFormData] = useState({
    businessId: "",
    userId: "",
    appointmentId: "",
    rating: 5,
    comment: "",
    serviceIds: [] as string[],
  });

  const filteredReviews = reviews.filter(review => {
    const business = businesses.find(b => b.id === review.businessId);
    const user = users.find(u => u.id === review.userId);
    
    return (
      business?.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingReview) {
      updateReview(editingReview.id, {
        ...formData,
        serviceIds: formData.serviceIds,
      });
      toast({
        title: "Avaliação atualizada",
        description: "A avaliação foi atualizada com sucesso.",
      });
    } else {
      const newReview: Review = {
        id: crypto.randomUUID(),
        ...formData,
        serviceIds: formData.serviceIds,
        createdAt: new Date(),
      };
      addReview(newReview);
      toast({
        title: "Avaliação criada",
        description: "Nova avaliação foi criada com sucesso.",
      });
    }

    setIsDialogOpen(false);
    setEditingReview(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      businessId: "",
      userId: "",
      appointmentId: "",
      rating: 5,
      comment: "",
      serviceIds: [],
    });
  };

  const handleEdit = (review: Review) => {
    setEditingReview(review);
    setFormData({
      businessId: review.businessId,
      userId: review.userId,
      appointmentId: review.appointmentId,
      rating: review.rating,
      comment: review.comment || "",
      serviceIds: review.serviceIds,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta avaliação?")) {
      deleteReview(id);
      toast({
        title: "Avaliação excluída",
        description: "A avaliação foi excluída com sucesso.",
      });
    }
  };

  const getReviewDetails = (review: Review) => {
    const business = businesses.find(b => b.id === review.businessId);
    const user = users.find(u => u.id === review.userId);
    const appointment = appointments.find(a => a.id === review.appointmentId);
    
    return { business, user, appointment };
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
      />
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 mr-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar avaliações..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-glam-800 border-glam-600 text-white"
            />
          </div>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Plus className="h-4 w-4 mr-2" />
              Nova Avaliação
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-glam-800 border-glam-700 text-white">
            <DialogHeader>
              <DialogTitle>
                {editingReview ? "Editar Avaliação" : "Nova Avaliação"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="businessId">Empresa</Label>
                <select
                  id="businessId"
                  value={formData.businessId}
                  onChange={(e) => setFormData({ ...formData, businessId: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  required
                >
                  <option value="">Selecione uma empresa</option>
                  {businesses.map(business => (
                    <option key={business.id} value={business.id}>
                      {business.businessName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="userId">Cliente</Label>
                <select
                  id="userId"
                  value={formData.userId}
                  onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  required
                >
                  <option value="">Selecione um cliente</option>
                  {users.filter(user => user.role === 'client').map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="appointmentId">Agendamento</Label>
                <select
                  id="appointmentId"
                  value={formData.appointmentId}
                  onChange={(e) => setFormData({ ...formData, appointmentId: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  required
                >
                  <option value="">Selecione um agendamento</option>
                  {appointments
                    .filter(appointment => appointment.userId === formData.userId && appointment.businessId === formData.businessId)
                    .map(appointment => (
                      <option key={appointment.id} value={appointment.id}>
                        {new Date(appointment.date).toLocaleDateString('pt-BR')}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <Label htmlFor="rating">Avaliação (1-5)</Label>
                <Input
                  id="rating"
                  type="number"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="bg-glam-700 border-glam-600"
                  required
                />
              </div>

              <div>
                <Label htmlFor="comment">Comentário</Label>
                <textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="flex min-h-[80px] w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-glam-900">
                {editingReview ? "Atualizar" : "Criar"} Avaliação
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {filteredReviews.map((review) => {
          const { business, user, appointment } = getReviewDetails(review);
          return (
            <Card key={review.id} className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-gold-400 font-semibold">{review.rating}/5</span>
                    </div>
                    
                    <div className="space-y-1 mb-3">
                      <p className="text-gray-300">
                        <span className="font-medium">Empresa:</span> {business?.businessName || 'N/A'}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium">Cliente:</span> {user?.name || 'N/A'}
                      </p>
                      {appointment && (
                        <p className="text-gray-300">
                          <span className="font-medium">Data:</span> {new Date(appointment.date).toLocaleDateString('pt-BR')}
                        </p>
                      )}
                      {review.comment && (
                        <p className="text-white mt-2">
                          <span className="font-medium">Comentário:</span>
                        </p>
                      )}
                    </div>
                    
                    {review.comment && (
                      <div className="bg-glam-700 p-3 rounded-md">
                        <p className="text-gray-300 italic">"{review.comment}"</p>
                      </div>
                    )}
                    
                    <p className="text-gray-400 text-sm mt-2">
                      Criada em: {new Date(review.createdAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(review)}
                      className="border-glam-600 text-gray-300 hover:bg-glam-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(review.id)}
                      className="border-red-600 text-red-400 hover:bg-red-600/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredReviews.length === 0 && (
        <Card className="bg-glam-800 border-glam-700 text-center p-8">
          <CardContent>
            <p className="text-gray-400">Nenhuma avaliação encontrada.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ReviewManagement;
