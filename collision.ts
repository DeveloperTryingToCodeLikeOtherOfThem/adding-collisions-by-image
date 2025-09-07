namespace advancedCollisions {
    export class Collision{
        private _image: Image
        private _sprite: Sprite
        private _ox: number
        private _oy: number

        constructor(sprite: Sprite, ox: number, oy: number) {
            this._image = img`.`
            this._sprite = sprite;
            this._ox = ox
            this._oy = oy
        }
         //% block="%collisionImage=tileset_tile_picker %sprite=variables_get(mySprite) %ox %oy" 
        setAdvancedCollision(collisionImage: Image, sprite: Sprite, ox: number, oy: number) {
            let collision = sprites.create(collisionImage)

            game.onUpdate(() => {
                // for left and right collision
                if (sprite.overlapsWith(collision) && sprite.x <= collision.x) {
                    sprite.x -= ox
                } else if (sprite.overlapsWith(collision) && sprite.x >= collision.x) {
                    sprite.x += ox
                }
                // for up and down collision
                if (sprite.overlapsWith(collision) && sprite.y <= collision.y) {
                    sprite.y -= oy
                } else if (sprite.overlapsWith(collision) && sprite.y >= collision.y) {
                    sprite.y += oy
                }
            })
        }
    }
    
    //% block="create a new collision for the tilemap for like new slopes or extra cool effects for the tilemap tile collisions %sprite=variables_get(mySprite) %ox %oy"
    export function createCollision(sprite: Sprite, ox: number, oy: number): Collision {
        const collision = new Collision(sprite, ox, oy)
        return collision
    }
}