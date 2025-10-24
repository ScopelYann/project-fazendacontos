import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import * as S from "./style";

export interface Attraction {
  id: string;
  name: string;
  description: string;
  full_description?: string;
  image_url: string;
  category?: keyof typeof categoryColors;
  gallery_images?: string[];
}

interface AttractionsCarouselProps {
  attractions: Attraction[];
}

const categoryColors = {
  aventura: "bg-orange-100 text-orange-800",
  lazer: "bg-blue-100 text-blue-800",
  aprendizado: "bg-purple-100 text-purple-800",
  natureza: "bg-green-100 text-green-800",
  especial: "bg-pink-100 text-pink-800",
}as const;

export default function AttractionsCarousel({ attractions }: AttractionsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [showAll, setShowAll] = useState(false);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(attractions.length / itemsPerPage);

  const currentAttractions = attractions.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const isBeginning = currentIndex === 0;
  const isEnd = currentIndex >= totalPages - 1;

  return (
    <S.Container>
      <S.Header>
        <S.Title>Nossos Espaços</S.Title>
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-2"
        >
          {showAll ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Mostrar Menos
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Ver Todos os Espaços
            </>
          )}
        </button>
      </S.Header>

      {showAll ? (
        <S.Grid>
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedAttraction(attraction)}
            >
              <S.Card style={{ backgroundImage: `url('${attraction.image_url}')` }}>
                <S.CardGradient />
                <S.CardContent>
                  {attraction.category && (
                    <div className={`${categoryColors[attraction.category]} w-fit mb-3`}>
                      {attraction.category}
                    </div>
                  )}
                  <S.CardTitle>{attraction.name}</S.CardTitle>
                  <S.CardText>{attraction.description}</S.CardText>
                </S.CardContent>
                <S.Overlay>Ver Detalhes</S.Overlay>
              </S.Card>
            </motion.div>
          ))}
        </S.Grid>
      ) : (
        <S.Carousel>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {currentAttractions.map((attraction, index) => (
                <motion.div
                  key={attraction.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  onClick={() => setSelectedAttraction(attraction)}
                >
                  <S.Card style={{ backgroundImage: `url('${attraction.image_url}')` }}>
                    <S.CardGradient />
                    <S.CardContent>
                      {attraction.category && (
                        <div className={`${categoryColors[attraction.category]} w-fit mb-3`} style={{borderRadius: "50px", padding: "3px 10px 3px 10px"}}>
                          {attraction.category}
                        </div>
                      )}
                      <S.CardTitle>{attraction.name}</S.CardTitle>
                      <S.CardText>{attraction.description}</S.CardText>
                    </S.CardContent>
                    <S.Overlay></S.Overlay>
                  </S.Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Botões */}
          <S.NavButton
            onClick={() => !isBeginning && setCurrentIndex((p) => p - 1)}
            disabled={isBeginning}
            $position="left"
          >
            <S.ArrowLeft className="leftPosition" />
          </S.NavButton>

          <S.NavButton
            onClick={() => !isEnd && setCurrentIndex((p) => p + 1)}
            disabled={isEnd}
            $position="right"
          >
            <S.ArrowRight className="rightPosition"/>
          </S.NavButton>

          {/* Indicadores */}
          <S.Indicators>
            {Array.from({ length: totalPages }).map((_, i) => (
              <S.Dot
                key={i}
                $active={i === currentIndex}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </S.Indicators>
        </S.Carousel>
      )}

      {/* Modal */}
      <div >
        <div className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <div>
            <h1 className="text-3xl font-bold text-green-900">
              {selectedAttraction?.name}
            </h1>
          </div>

          {selectedAttraction && (
            <S.Modal className="space-y-6">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={selectedAttraction.image_url}
                  alt={selectedAttraction.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {selectedAttraction.category && (
                <div className={`${categoryColors[selectedAttraction.category]} text-lg px-4 py-2`}>
                  {selectedAttraction.category}
                </div>
              )}

              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedAttraction.full_description || selectedAttraction.description}
                </p>
              </div>

              {selectedAttraction.gallery_images && selectedAttraction.gallery_images.length > 0 && (
                <div>
                  <h4 className="text-xl font-semibold text-green-900 mb-4">Galeria</h4>
                  <S.Gallery>
                    {selectedAttraction.gallery_images.map((img, idx) => (
                      <S.GalleryItem key={idx}>
                        <img src={img} alt={`${selectedAttraction.name} ${idx + 1}`} />
                      </S.GalleryItem>
                    ))}
                  </S.Gallery>
                </div>
              )}
            </S.Modal>
          )}
        </div>
      </div>
    </S.Container>
  );
}
