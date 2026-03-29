import { Card } from '@/shared/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/shared/components/ui/carousel';
import { Spinner } from '@/shared/components/ui/spinner';

const InventoryImageCarousel = ({
    urls,
    isLoading,
}: {
    urls: string[];
    isLoading: boolean;
}) => {
    return (
        <Card className="md:col-span-1 overflow-hidden">
            <div className="p-12 h-full">
                {isLoading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <Spinner className="size-5 text-slate-500" />
                    </div>
                ) : urls?.length > 0 ? (
                    <Carousel
                        className="h-full flex overflow-hidden relative"
                        opts={{ active: urls.length > 1 }}
                    >
                        <CarouselContent className="flex h-full">
                            {urls.map((url, i) => (
                                <CarouselItem key={i}>
                                    <img
                                        src={url || '/inventory-dummy.png'}
                                        alt={`Slide ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {urls.length > 1 && (
                            <>
                                <CarouselPrevious className="absolute left-4" />
                                <CarouselNext className="absolute right-4" />
                            </>
                        )}
                    </Carousel>
                ) : (
                    // ✅ Empty State
                    <div className="w-full h-64 flex items-center justify-center text-xs text-slate-500">
                        No images available
                    </div>
                )}
            </div>
        </Card>
    );
};

export default InventoryImageCarousel;
