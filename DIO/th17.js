{
	"codecaves": {
		"dio_codecave": "A3 48 34 4B 00 53 31 DB 43 E9 03 00 00 00 53 31 DB A1 C3 A8 52 00 85 C0 0F 84 76 00 00 00 3D B4 00 00 00 0F 8C 21 00 00 00 81 2D C3 A8 52 00 B4 00 00 00 DB 05 C3 A8 52 00 D8 0D CB 9F 49 00 D9 1D 18 59 4B 00 E9 2D 00 00 00 83 F8 14 0F 87 24 00 00 00 50 B8 20 00 00 00 2B 05 C3 A8 52 00 A3 C3 A8 52 00 DB 05 C3 A8 52 00 D8 0D CB 9F 49 00 D9 1D 18 59 4B 00 58 48 A3 C3 A8 52 00 85 C0 0F 85 5A 00 00 00 C7 05 18 59 4B 00 00 00 80 3F E9 4B 00 00 00 85 DB 0F 85 0F 00 00 00 F7 05 30 32 4B 00 00 02 00 00 E9 0A 00 00 00 F7 05 48 34 4B 00 00 02 00 00 0F 84 24 00 00 00 C7 05 C3 A8 52 00 C8 00 00 00 53 51 52 F3 0F 10 15 CF 9F 49 00 B9 F0 47 52 00 6A 49 E8 [0x004654F0] 5A 59 5B 85 DB 5B 0F 85 0C 00 00 00 0F B7 05 30 32 4B 00 E9 [0x0044F1DE] E9 [0x0044F3C6] CD CC 4C 3D 00 00 00 00"
	},
	"binhacks": {
		"dio_jump": {
			"addr": "0x0044F1D7",
			"code": "E9 [codecave:dio_codecave+0xE] 90 90",
			"title": "Jump to codecave"
		},
		"dio_jump_rpy": {
			"addr": "0x0044F3C1",
			"code": "E9 [codecave:dio_codecave]",
			"title": "Jump to codecave (for replays)"
		},
		"dio_movement_horizontal": {
			"addr": "0x00447352",
			"code": "90 90 90 90 90 90 90 90",
			"title": "Allow the player to move horizontally during stopped time"
		},
		"dio_movement_vertical": {
			"addr": "0x00447365",
			"code": "90 90 90 90 90 90 90 90",
			"title": "Allow the player to move vertically during stopped time"	
		}
	}
}