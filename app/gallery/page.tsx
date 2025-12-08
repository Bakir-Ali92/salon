"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getcategories, getgalleryitems, type GalleryItem } from "@/lib/gallery"
import { useLanguage } from "@/contexts/LanguageContext"
import { Image as ImageIcon, X, Play } from "lucide-react" 
// Removed unused icons (Pause, Volume2, VolumeX) since we are using native controls

export default function GalleryPage() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null)
  
  // We don't need isPlaying or isMuted state anymore because the native player handles it
  const videoRef = useRef<HTMLVideoElement>(null)

  const galleryItems = getgalleryitems()
  const categories = getcategories()

  const filteredItems =
    selectedCategory === "all" 
      ? galleryItems 
      : galleryItems.filter((item) => item.category === selectedCategory)

  // Counts for stats
  const imagesCount = galleryItems.filter(item => item.mediaType === 'image').length
  const videosCount = galleryItems.filter(item => item.mediaType === 'video').length

  const closeModal = () => {
    // Pause video when closing modal
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setSelectedMedia(null)
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Header cartCount={0} onCartClick={() => {}} />
      
      <div className="pt-20" />

      <div className="bg-background pt-6 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {language === "en" ? "Our Gallery" : "معرضنا"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === "en"
              ? "Showcase of our finest beauty work - Images & Videos"
              : "عرض لأفضل أعمالنا - صور وفيديو"}
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{imagesCount}</div>
              <div className="text-sm text-muted-foreground">{language === "en" ? "Photos" : "صور"}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500">{videosCount}</div>
              <div className="text-sm text-muted-foreground">{language === "en" ? "Videos" : "فيديوهات"}</div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className={`flex flex-wrap gap-3 justify-center ${language === "ar" ? "flex-row-reverse" : ""}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category.id
                    ? "bg-amber-500 text-white"
                    : "bg-card border border-amber-500/20 text-foreground hover:border-amber-500/50 hover:bg-amber-500/10"
                }`}
              >
                {language === "en" ? category.nameEn : category.nameAr}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/50 transition cursor-pointer relative"
                onClick={() => {
                  if (item.mediaType === 'video') {
                    setSelectedMedia(item)
                  }
                }}
              >
                <div className="relative overflow-hidden h-80">
                  {/* Image or Video Thumbnail */}
                  {item.mediaType === 'image' ? (
                    <>
                      <Image
                        src={item.mediaUrl || "/placeholder.svg"}
                        alt={language === "en" ? item.titleEn : item.titleAr}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                      
                      {/* Title Overlay - ONLY FOR IMAGES */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-start p-6">
                        <div>
                          <h3 className="font-playfair text-xl font-bold text-white mb-1">
                            {language === "en" ? item.titleEn : item.titleAr}
                          </h3>
                          <p className="text-amber-300 text-sm flex items-center gap-1">
                            <ImageIcon className="w-3 h-3" />
                            {language === "en" ? "Photo" : "صورة"}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Video Thumbnail */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.thumbnail || item.mediaUrl || "/placeholder.svg"}
                          alt={language === "en" ? item.titleEn : item.titleAr}
                          fill
                          className="object-cover group-hover:scale-110 transition duration-500"
                        />
                        {/* Video Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        {/* Duration Badge */}
                        {item.duration && (
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                            {item.duration}
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Modal - UPDATED FOR NATIVE CONTROLS */}
        {selectedMedia && selectedMedia.mediaType === 'video' && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-amber-400 z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10">
                <video
                  ref={videoRef}
                  src={selectedMedia.mediaUrl}
                  className="w-full h-auto max-h-[80vh]"
                  controls={true} // Enabled native controls (Scrub bar, Fullscreen, Volume)
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                />
              </div>
              
              {/* Optional: Title below video */}
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-medium">
                  {language === "en" ? selectedMedia.titleEn : selectedMedia.titleAr}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer language={language}/>
    </main>
  )
}