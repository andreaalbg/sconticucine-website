import BackgroundLayers from '@/components/sanctuary/BackgroundLayers'
import CustomCursor from '@/components/sanctuary/CustomCursor'
import SanctuaryHeader from '@/components/sanctuary/SanctuaryHeader'
import InteractionButton from '@/components/sanctuary/InteractionButton'

export default function SanctuaryLanding() {
  return (
    <div className="sanctuary-page">
      <BackgroundLayers />
      
      <div className="ui-layer">
        <SanctuaryHeader />
        <InteractionButton />
        
        <div className="coords">
          41.9028° N, 12.4964° E
        </div>
      </div>

      <CustomCursor />
    </div>
  )
}
