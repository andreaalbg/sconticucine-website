import {
  PRIVACY_CONTACT_EMAIL,
  privacyPolicySections,
  type PrivacyBlock,
} from '@/lib/privacy-policy-content'

const SUBSECTION_IDS = new Set([
  'live-chat',
  'registrazione',
  'ecommerce',
  'marketing',
])

function renderParagraph(text: string) {
  if (text.includes(PRIVACY_CONTACT_EMAIL)) {
    const [before, after] = text.split(PRIVACY_CONTACT_EMAIL)
    return (
      <>
        {before}
        <a
          href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
          className="text-[#2a7a6e] underline underline-offset-2 hover:text-[#1d6b60]"
        >
          {PRIVACY_CONTACT_EMAIL}
        </a>
        {after}
      </>
    )
  }
  return text
}

function Block({ block }: { block: PrivacyBlock }) {
  if (block.type === 'ul') {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[#444]">
        {block.items.map(item => (
          <li key={item} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="mt-4 leading-relaxed text-[#444]">{renderParagraph(block.text)}</p>
  )
}

export default function PrivacyPolicyBody() {
  return (
    <article className="legal-content">
      {privacyPolicySections.map(section => {
        const isSub = SUBSECTION_IDS.has(section.id)
        const Tag = isSub ? 'h3' : 'h2'

        return (
          <section
            key={section.id}
            id={section.id}
            className={
              isSub
                ? 'mt-10 scroll-mt-28'
                : 'mt-12 scroll-mt-28 border-t border-[#e8e0d6] pt-10 first:mt-0 first:border-0 first:pt-0'
            }
          >
            <Tag
              className={
                isSub
                  ? 'font-serif text-xl text-[#1a1a1a]'
                  : 'font-serif text-2xl text-[#1a1a1a] md:text-3xl'
              }
            >
              {section.title}
            </Tag>
            {section.blocks.map((block, i) => (
              <Block key={`${section.id}-${i}`} block={block} />
            ))}
          </section>
        )
      })}
    </article>
  )
}
