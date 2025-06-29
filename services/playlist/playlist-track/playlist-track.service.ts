import { api } from '@/api/interceptors';
import type {
	AddTrackDto,
	PlaylistTrackRelation,
	TrackInPlaylist,
	UpdateTrackPositionDto
} from './playlist-track.types';
import type { TracksIds } from '@/services/track/track.types';

export const playlistTrackService = {
	async getMany(playlistId: number, take?: number) {
		return await api.get<TrackInPlaylist[]>(
			`playlist/${playlistId}/track?take=${take ? take : ''}`
		);
	},

	async getManyIds(playlistId: number, positionToExclude: number) {
		return await api.get<TracksIds>(
			`playlist/${playlistId}/track/ids?positionToExclude=${positionToExclude ? positionToExclude : ''}`
		);
	},

	async add(playlistId: number, trackId: number, dto?: AddTrackDto) {
		return await api.post<PlaylistTrackRelation>(
			`playlist/${playlistId}/track/${trackId}`,
			dto
		);
	},

	async updateTrackPosition(
		playlistId: number,
		trackId: number,
		dto: UpdateTrackPositionDto
	) {
		return await api.patch<void>(
			`playlist/${playlistId}/track/${trackId}/position`,
			dto
		);
	},

	async remove(playlistId: number, trackId: number) {
		return await api.delete<void>(`/playlist/${playlistId}/track/${trackId}`);
	}
};
