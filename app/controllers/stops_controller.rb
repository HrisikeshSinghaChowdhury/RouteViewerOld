class StopsController < ApplicationController

  def index
  end

  def new
    @stop = Stop.new
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    def set_stop
      @stop = @stops.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stop_params
      params.require(:stop).permit(:id, :from_address, :from_lat, :from_long, :to_address, :to_lat, :to_lon )
    end
end