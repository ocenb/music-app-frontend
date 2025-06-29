'use client';

import type { Track } from '@/services/track/track.types';
import { create } from 'zustand';

export const useTrackStore = create<{
	trackInfo: Track | null;
	isPlaying: boolean;
	audio: HTMLAudioElement | null;
	audioReady: boolean;
	progress: number;
	isSeeking: boolean;
	setTrackInfo: (trackInfo: Track | null) => void;
	setIsPlaying: (isPlaying: boolean) => void;
	setAudio: (audio: HTMLAudioElement | null) => void;
	setAudioReady: (audioReady: boolean) => void;
	setProgress: (progress: number) => void;
	setIsSeeking: (isSeeking: boolean) => void;
}>((set) => ({
	trackInfo: null,
	isPlaying: false,
	audio: null,
	audioReady: false,
	progress: 0,
	isSeeking: false,
	setTrackInfo: (trackInfo: Track | null) => set(() => ({ trackInfo })),
	setIsPlaying: (isPlaying: boolean) => set(() => ({ isPlaying })),
	setAudio: (audio: HTMLAudioElement | null) => set(() => ({ audio })),
	setAudioReady: (audioReady: boolean) => set(() => ({ audioReady })),
	setProgress: (progress: number) => set(() => ({ progress })),
	setIsSeeking: (isSeeking: boolean) => set(() => ({ isSeeking }))
}));
