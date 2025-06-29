import {
	ACCEPTED_AUDIO_TYPES,
	ACCEPTED_IMAGE_TYPES,
	AUDIO_FILE_LIMIT,
	IMAGE_FILE_LIMIT,
	messages
} from '@/config';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function nFormatter(num: number) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatTime(time: number) {
	const truncatedTime = Math.trunc(time);
	const minutes = Math.trunc(truncatedTime / 60);
	let seconds = (truncatedTime % 60).toString();

	if (seconds.length === 1) {
		seconds = '0' + seconds;
	}

	return minutes + ':' + seconds;
}

export function formatDate(dateString: string) {
	const date = new Date(dateString);

	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

export function shuffleArray(array: number[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export function validateImage(file: File) {
	if (file.size > IMAGE_FILE_LIMIT) {
		throw new Error(messages.imageMaxSize);
	}

	if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
		throw new Error(messages.imageTypes);
	}
}

export function validateAudio(file: File) {
	if (file.size > AUDIO_FILE_LIMIT) {
		throw new Error(messages.audioMaxSize);
	}

	if (!ACCEPTED_AUDIO_TYPES.includes(file.type)) {
		throw new Error(messages.audioTypes);
	}
}
