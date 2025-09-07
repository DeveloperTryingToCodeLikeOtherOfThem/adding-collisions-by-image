namespace advancedCollisions {
    export class Collision {
        private _sprite: Sprite
        private _ox: number
        private _oy: number

        constructor(sprite: Sprite, ox: number, oy: number) {
            this._sprite = sprite
            this._ox = ox
            this._oy = oy
        }

        //% block="set all advanced collision tiles of type %collisionImage=tileset_tile_picker to walls for %sprite=variables_get(mySprite) with offset X %ox offset Y %oy"
        //% weight=98
        setAllAdvancedTiles(collisionImage: Image, wall: boolean = true) {
            const sc = game.currentScene().tileMap
            const tileLocations = tiles.getTilesByType(collisionImage)

            // Mark all these tiles as walls
            for (let loc of tileLocations) {
                tiles.setWallAt(loc, wall)
            }

            // Now use engine physics
            game.onUpdate(() => {
                if (sc.isOnWall(this._sprite)) {
                    // Push the sprite slightly away from the wall
                    // Example: simple bounce-back
                    this._sprite.x -= this._ox
                    this._sprite.y -= this._oy
                }
            })
        }
    }

    //% block="create collision system for %sprite=variables_get(mySprite) offset X %ox offset Y %oy"
    //% blockSetVariable="collisionSprite"
    //% weight=100
    export function createCollision(sprite: Sprite, ox: number, oy: number): Collision {
        return new Collision(sprite, ox, oy)
    }
}
