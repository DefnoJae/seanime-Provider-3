declare function fetch(url: string, options?: FetchOptions): Promise<FetchResponse>
declare function $getUserPreference(key: string): string | undefined

interface FetchOptions {
    method?: string
    headers?: Record<string, string>
    body?: any
    timeout?: number
}

interface FetchResponse {
    status: number
    ok: boolean
    json<T = any>(): T
    text(): string
}

type AnimeProviderSmartSearchFilter = "batch" | "episodeNumber" | "resolution" | "query" | "bestReleases"
type AnimeProviderType = "main" | "special"

interface AnimeProviderSettings {
    canSmartSearch: boolean
    smartSearchFilters: AnimeProviderSmartSearchFilter[]
    supportsAdult: boolean
    type: AnimeProviderType
}

interface FuzzyDate {
    year: number
    month?: number
    day?: number
}

interface Media {
    id: number
    idMal?: number
    status?: string
    format?: string
    englishTitle?: string
    romajiTitle?: string
    episodeCount?: number
    absoluteSeasonOffset?: number
    synonyms: string[]
    isAdult: boolean
    startDate?: FuzzyDate
}

interface AnimeSearchOptions {
    media: Media
    query: string
}

interface AnimeSmartSearchOptions {
    media: Media
    query: string
    batch: boolean
    episodeNumber: number
    resolution: string
    anidbAID: number
    anidbEID: number
    bestReleases: boolean
}

interface AnimeTorrent {
    name: string
    date: string
    size: number
    formattedSize: string
    seeders: number
    leechers: number
    downloadCount: number
    link: string
    downloadUrl: string
    magnetLink?: string
    infoHash?: string
    resolution?: string
    isBatch?: boolean
    episodeNumber?: number
    releaseGroup?: string
    isBestRelease: boolean
    confirmed: boolean
}


